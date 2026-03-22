function Outer() {
    let username = "Teacher"
    // console.log(name)

    function Inner1() {
        let name = "Prabhat"
        console.log(username)
    }

    function Inner2() {
        // console.log(name)
        console.log(username)
    }

    Inner1()
    Inner2()
}

Outer()

/*
Outer()
│
├── username = "Teacher" -  Inner1 and Inner2 can access
│
├── Inner1()
│   └── name = "Prabhat" -  Only Inner1 can access
│
└── Inner2()
    └── username access  -  It can access Outer
*/