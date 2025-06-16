export default function Ternary(){
    const signUp = (formData) => {
        // const email = formData.get("email")
        // const password = formData.get("password")
        // const employmentStatus = formData.get("employmentStatus")
        // const dietaryRestrictions = formData.getAll("dietaryRestrictions")
        // const favColor = formData.get("favColor")
        // console.log(email)
        // console.log(password)
        // console.log(employmentStatus)
        const data = Object.fromEntries(formData)

        const dietaryData = formData.getAll("dietaryRestrictions")

        const allData = {
            ...data,
            dietaryData

        }
        
        console.log(allData)
    }
    return (
        <form action={signUp}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="john_deo@email.com" defaultValue="chris@gmail.com" />
            <br />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" defaultValue="Password1234" />

            <fieldset>
                <legend>Employment Status:</legend>
                <label htmlFor="Unemployed">Unemployed</label>
                <input id="unemployed" type="radio" name="employmentStatus" value="unemployed" defaultChecked={true} />

                <label htmlFor="Part-Time">Part-Time</label>
                <input id="Part-Time" type="radio" name="employmentStatus" value="part-time" />

                <label htmlFor="Full-Time">Full-Time</label>
                <input id="Full-Time" type="radio" name="employmentStatus" value="full-time" />
            </fieldset>

            <fieldset>
                <legend>Dietary Status:</legend>
                <label htmlFor="Unemployed">Unemployed</label>
                <input id="unemployed" type="checkbox" name="dietaryRestrictions" value="unemployed" defaultChecked={true} />

                <label htmlFor="Part-Time">Part-Time</label>
                <input id="Part-Time" type="checkbox" name="dietaryRestrictions" value="part-time" />

                <label htmlFor="Full-Time">Full-Time</label>
                <input id="Full-Time" type="checkbox" name="dietaryRestrictions" value="full-time" />
            </fieldset>

            <label htmlFor="favColor">What is your favourite color?</label>
            <select id="favColor" name="favColor" defaultValue="" required >
                <option value="" disabled>-- Choose your color --</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
            </select>

            <button>submit</button>
        </form>
    )
}