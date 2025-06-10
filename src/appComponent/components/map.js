const map = [1,2,3,4,5]

map.map(num => {
    console.log(num * num)
})

const names = ["nonso", "baby", "ify"]

const capitalise = names.map(
    name => console.log(name[0].toUpperCase + name.slice(1))
)