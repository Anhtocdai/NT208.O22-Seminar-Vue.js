const app = Vue.createApp({
    data() {
      return {
        message: 'Hello Vue!',
        showMessage: true,
        count: 0,
        firstName: 'Trần Minh',
        lastName: 'Hiếu',
        fullName: '', // Thuộc tính này sẽ được tính toán từ firstName và lastName
        userInput: '', // Thuộc tính này sẽ được theo dõi để thực hiện các hành động khi có sự thay đổi
        src: './pic1.webp', alt: 'minhieu'
        
      }
    },
    methods: {
        changePic() {
            this.src = './tinhhoahoitu.jpg'
             thí.alt = 'tinhhoahoitu'
        },
        changeMessage() {
            this.message = 'Bing bing bing'
            this.showMessage = false
        },
      increaseCount() {
        this.count++;
      },
      updateFullName() {
        this.fullName = this.firstName + ' ' + this.lastName;
      },
      handleUserInput() {
        console.log('User input changed to:', this.userInput);
      }
    },
    computed: {
      reversedMessage() {
        // Thuộc tính computed này sẽ tính toán giá trị đảo ngược của message
        return this.message.split('').reverse().join('');
      }
    },
    watch: {
      // Watcher cho thuộc tính userInput để theo dõi sự thay đổi và thực hiện hành động tương ứng
      userInput(newValue, oldValue) {
        console.log('User input changed from', oldValue, 'to', newValue);
      }
    },
    components: {
      // Một component con của ứng dụng Vue
      'my-component': {
        template: `
          <div>
            <h2>This is a child component</h2>
            <p>{{ message }}</p>
          </div>
        `,
        data() {
          return {
            message: 'Hello from child component!'
          }
        }
      }
    }
  });
  
  app.mount('#app');
  

