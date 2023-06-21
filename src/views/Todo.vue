<template>
  <div class="recommended-books">
    <h1 class="title">LIST BUKU REKOMENDASI</h1>
    <form>
      <label for="activity" class="label"><b>Input List:</b></label>
      <input type="text" v-model="activity" id="activity" name="activity" class="input-field"><br><br>
      <button type="button" @click="addActivity" class="button add-button">Tambah</button>
      <button type="button" @click="filterUnfinished" class="button filter-button">Filter Buku</button>
    </form>
    <ul class="activity-list">
      <li v-for="(activity, index) in activities" :key="index" :class="{ completed: activity.completed }">
        {{ activity.name }}
        <button @click="removeActivity(index)" class="button delete-button">Hapus</button>
        <button @click="completeActivity(index)" class="button complete-button">Selesai</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [],
      activity: ""
    };
  },
  methods: {
    addActivity() {
      if (this.activity !== "") {
        this.activities.push({ name: this.activity, completed: false });
        this.activity = "";
      }
    },
    removeActivity(index) {
      this.activities.splice(index, 1);
    },
    completeActivity(index) {
      this.activities[index].completed = true;
    },
    filterUnfinished() {
      this.activities = this.activities.filter((activity) => !activity.completed);
    }
  }
};
</script>

<style scoped>
.recommended-books {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/backgrond.jpeg');
  background-size: cover;
  background-position: center;
}

.title {
  color: #FAEBD7;
  font-family: 'Arial Black', sans-serif;
  margin-top: 50px;
  text-align: center;
}

.label {
  color: #D8BFD8;
  display: inline-block;
  margin-right: 10px;
  text-align: right;
  width: 80px;
}

.input-field {
  border: 2px solid #a5a4a4;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  margin: 5px 0;
  padding: 10px;
  width: 200px;
}

.button {
  background-color: #DDA0DD;
  font-family: 'Courier', sans-serif;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  padding: 10px;
}

.button:hover {
  background-color: #b73232;
}

.activity-list {
  color: #9c11a0;
  font-family: 'Courier New', sans-serif;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.activity-list li {
  background-color: #D3D3D3;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
  margin-bottom: 5px;
  padding: 10px;
}

.activity-list li button {
  background-color: #DDA0DD;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  cursor: pointer;
  float: right;
  font-size: 14px;
  margin-left: 5px;
  padding: 5px;
}

.activity-list li button:last-child {
  background-color: #9c11a0;
}

.activity-list li button:hover {
  background-color: #e60000;
}

.activity-list li button:last-child:hover {
  background-color: #e60000;
}

.activity-list li.completed {
  text-decoration: line-through;
}
</style>
