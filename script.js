// nếu dùng biến hàm từ input ví đụ như speed kia thì phải cho sự kiện lấy giá trị input và sự kiện gọi hàm mới vào trong 1 button để button chạy nó, để ngoài ko hiểu

let Mouse = function (name, weight, speed, life) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.life = life;
    this.speak = function () {
        console.log(this.name + "-" + this.weight + "-" + this.speed + "-" + this.life + "-chit-chit-chit-GÂU GÂU")
    }
};
let mouse = new Mouse("Mickey", 100, 1, "on");
let Cat = function (name, weight, speed) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.speak = function () {
        console.log(this.name + "-" + this.weight + "-" + this.speed + "meow-meow-ahi-ahi");
    };
    this.catchMouse = function () {
        if (cat.speed > mouse.speed) {
            alert("Got It, Mouse is die!");
        }else {
            alert("so False!");
        }
    };
    this.eatMouse = function () {
        if (mouse.life === "on") {
            cat.weight += mouse.weight;
            alert("Ate mouse!" + "weight of cat " + cat.weight);
        }
    }
};
let cat = new Cat("Ogg", 10, 10);
mouse.speak();
cat.speak();

function catchMouse1() {
    cat.catchMouse();
}

function eatMouse1() {
    cat.eatMouse();
}
