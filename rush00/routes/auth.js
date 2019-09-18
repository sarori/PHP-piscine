var express = require("express");
var router = express.Router();
var path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const hash = password => {
  return crypto
    .createHash("whirlpool")
    .update(password, "utf-8")
    .digest("hex");
};

router.post("/create", function(request, response) {
  var post = request.body;
  var userId = post.userId;
  var name = post.name;
  var password = hash(post.pwd);

  fs.exists(path.join(__dirname, `../data/${userId}`), exists => {
    if (exists) {
      response.send(false);
    } else {
      fs.writeFile(
        path.join(__dirname, `../data/${userId}`),
        `${name}, ${password}`,
        function(err) {
          // success case, the file was saved
          if (err) {
            return console.log(err);
          }
          response.send({ userId, name, password, isLogin: true });
        }
      );
    }
  });
});

router.post("/login", function(request, response) {
  var post = request.body;
  var userId = post.userId;
  var password = hash(post.pwd);

  fs.exists(path.join(__dirname, `../data/${userId}`), exists => {
    if (exists) {
      fs.readFile(
        path.join(__dirname, `../data/${userId}`),
        "utf-8",
        (err, data) => {
          err => {
            response.send(false);
            // console.log("Invalid User\n");
            // console.error(err);
            // return;
          };
          if (data === password) {
            const tmp = data.split(",");
            const result = {
              userId,
              name: tmp[0],
              pwd: tmp[1],
              isLogin: true
            };

            response.send(result);
          } else {
            response.send(null);
          }
        }
      );
    } else {
      response.send(false);
    }
  });
});

router.get("/logout", function(request, response) {
  request.session.destroy(function(err) {
    response.redirect("/");
  });
});

module.exports = router;

// var express = require("express");
// var router = express.Router();
// var path = require("path");
// var sanitizeHtml = require("sanitize-html");
// var template = require("../lib/template.js");
// const fs = require("fs");
// const crypto = require("crypto");

// const hash = password => {
//   return crypto
//     .createHash("whirlpool")
//     .update(password, "utf-8")
//     .digest("hex");
// };

// router.get("/login", function(request, response) {
//   var title = "WEB - login";
//   var list = template.list(request.list);
//   var html = template.HTML(
//     title,
//     list,
//     `
//     <form action="/auth/login" method="post">
//       <p><input type="text" name="userid" placeholder="ID"></p>
//       <p><input type="password" name="pwd" placeholder="password"></p>
//       <p>
//         <input type="submit" value="login">
//       </p>
//     </form>
//   `,
//     ""
//   );
//   response.send(html);
// });

// router.get("/create", function(request, response) {
//   var title = "WEB - login";
//   var list = template.list(request.list);
//   var html = template.HTML(
//     title,
//     list,
//     `
//     <form action="/auth/create" method="post">
//       <p><input type="text" name="userid" placeholder="ID"></p>
//       <p><input type="password" name="pwd" placeholder="password"></p>
//       <p>
//         <input type="submit" value="create">
//       </p>
//     </form>
//   `,
//     ""
//   );
//   response.send(html);
// });

// router.post("/create", function(request, response) {
//   var post = request.body;
//   var userid = post.userid;
//   var password = hash(post.pwd);
//   fs.exists(path.join(__dirname, `../data/${userid}`), exists => {
//     if (exists) {
//       console.log("used user name\n");
//       response.send(false);
//     } else {
//       fs.writeFile(
//         path.join(__dirname, `../data/${userid}`),
//         password,
//         function(err) {
//           // success case, the file was saved
//           if (err) console.log(err);
//           console.log("User info saved!");
//         }
//       );
//     }
//   });
// });

// router.post("/login", function(request, response) {
//   var post = request.body;
//   var userid = post.userid;
//   var password = hash(post.pwd);

//   fs.exists(path.join(__dirname, `../data/${userid}`), exists => {
//     if (exists) {
//       console.log(exists);
//       fs.readFile(
//         path.join(__dirname, `../data/${userid}`),
//         "utf-8",
//         (err, data) => {
//           err => {
//             console.log("Invalid User\n");
//             console.error(err);
//             return;
//           };
//           if (data === password) {
//             console.log("Login Success\n");
//           } else {
//             console.log("Login not Success\n");
//           }
//         }
//       );
//     } else {
//       console.log("not exist user\n");
//     }
//   });
// });

// router.get("/logout", function(request, response) {
//   request.session.destroy(function(err) {
//     response.redirect("/");
//   });
// });

// module.exports = router;
