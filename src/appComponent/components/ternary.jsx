export default function Ternary(){
    const handleSubmit = (event) => {
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl)
        const 
    }
    return (
        <form onSubmit={handleSubmit} method="POST">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john_deo@email.com" />
            <br />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <button>SubmitT</button>
        </form>
    )
}