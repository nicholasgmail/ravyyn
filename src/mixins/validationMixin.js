const ValidationMixin = {
    data () {
        return {
            errors: []
        }
    },
    methods: {
        validate(formData) {
            this.errors = [];
            
            // loop thru all key:value pairs and push errors 
            // into the errors array if any
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'email' && !value) {
                    this.errors.push('Email required.');
                } else if (key === 'email' && !this.validEmail(value)) {
                    this.errors.push('Valid email required.');
                }

                if (key === 'password' && !value) {
                    this.errors.push("Password required.");
                }

                if (key === 'firstName' && !value) {
                    this.errors.push('First Name is required');
                }

                if (key === 'lastName' && !value) {
                    this.errors.push('Last Name is required');
                }

                if (key === 'instagramHandle' && !value) {
                    this.errors.push('Instagram handle required');
                }

                if (key === 'newPassword' && !value) {
                    this.errors.push('New Password required');
                }

                if (key === 'newPasswordConfirm' && !value) {
                    this.errors.push('Confirm Password required');
                }

                if(key === 'message' && !value) {
                    this.errors.push('Message is required')
                }
            });

            return !this.errors.length
        },
        validEmail (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
  }

  export default ValidationMixin;