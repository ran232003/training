const { checkValidation } = require("../helperFunc");

module.exports = {
  hello() {
    return "hello";
  },
  testing() {
    return { text: "asd", view: 123 };
  },
  createUser(args, req) {
    console.log(args, "here", args.user);
    const user = args.user;
    const checkSchema = checkValidation(user, "userSchema.json");
    const email = args.user.email;
    const password = args.user.password;
    const name = args.user.name;

    return {
      email: email,
      id: "1234",
      posts: [
        {
          title: "asd",
          content: "awerqr",
        },
        {
          title: "asd2",
          content: "awerqr2",
        },
      ],
    };
  },
};
