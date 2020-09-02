const Util = require('@brother.bet/Util');

export default class Database {
  constructor(api) {
    // Functions
    this.delay = Util.delay;

    this.api = api;
  }

  async setDataSensor(name,value,timestamp) {
    try {
      const response = await this.api.post(`/sensor?name=${year}`);
      return response.data;
    } catch (error) {
      console.log(error);
      console.log('Error in update cloud.');
      await this.delay();
      return this.updateCloud(year);
    }
  }

  async getBundle(year = '2020') {
    try {
      const response = await this.api.get(`/fifaArena?year=${year}`);
      if (response.data) return response.data;
      await this.delay(2);
      return this.getBundle(year);
    } catch (error) {
      console.log(error);
      await this.delay(2);
      return this.getBundle(year);
    }
  }

  async getData(date = '2020.03.01') {
    try {
      const response = await this.api.get(`/fifaArenaDates?date=${date}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }

  async getDays(year = '2020') {
    try {
      const response = await this.api.get(`/fifaArenaDays?year=${year}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }

  async deleteData(date) {
    try {
      const response = await this.api.delete(`/fifaArena?date=${date}`);
      return response.data;
    } catch (error) {
      console.log(error);
      console.log('Error in delete data day.');
      await this.delay();
      return this.deleteDataDay(date);
    }
  }

  async getConsistency(type = 'whole') {
    try {
      const response = await this.api.get(`/databaseConsistency?type=${type}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }

  async postConsistency(data, type = 'whole') {
    try {
      const response = await this.api.post(`/databaseConsistency?type=${type}`, data);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  }
}
