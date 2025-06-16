export default function Ternary(){
    const signUp = (formData) => {
        const email = formData.get("email")
        console.log(email)
    }
    return (
        <form action={signUp}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john_deo@email.com" />
            <br />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button>SubmitT</button>
        </form>
    )
}