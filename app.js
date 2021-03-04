const baseUrl = 'https://randomuser.me/api/';

const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      email: `johndoe@example.com`,
      cell: '111111111',
      picture: `${baseUrl}portraits/men/15.jpg`,
      location: 'New York, United States',
      registered: '2015-02-04',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch(baseUrl);
      const { results } = await res.json();
      const {
        name,
        cell,
        email,
        picture,
        gender,
        location,
        registered,
      } = await results[0];
      console.log(registered, results[0]);
      this.firstName = name.first;
      this.lastName = name.last;
      this.gender = gender;
      this.cell = cell;
      this.email = email;
      this.picture = picture.large;
      this.location = `${location.city}, ${location.country}`;
      this.registered = `${registered.date.split('T')[0]}`;
    },
  },
});

app.mount('#app');
