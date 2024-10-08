import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    postal: "",
    comments: false,
    candidates: false,
    offers: false,
    notification: "",
  });

  const changeHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <br />
        <input
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Irshad"
          value={formData.firstname}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="laststname">Last Name</label>
        <br />
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Alam"
          value={formData.lastname}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="i@gmail.com"
          value={formData.email}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option value="india">India</option>
          <option value="us">United States</option>
          <option value="canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>
        <br />
        <label htmlFor="street">Street Address</label>
        <br />
        <input
          type="text"
          id="street"
          name="street"
          placeholder="A-101/1"
          value={formData.street}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Thane"
          value={formData.city}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="state">State /Province</label>
        <br />
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Maharashra"
          value={formData.state}
          onChange={changeHandler}
        />
        <br />
        <label htmlFor="postal">Zip / Postal</label>
        <br />
        <input
          type="number"
          id="postal"
          name="postal"
          placeholder="400601"
          value={formData.postal}
          onChange={changeHandler}
        />
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div>
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.value}
              onChange={changeHandler}
            />
            <label htmlFor="comments">Comments</label>
            <p>Get notofied when somenone post a comment on posting</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <label htmlFor="candidates">Candidates</label>
            <p>Get notofied when a candidates apply for a job</p>
          </div>
          <div>
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <label htmlFor="offers">Offers</label>
            <p>Get notofied when somenone accept or reject a offer</p>
          </div>
        </fieldset>
        <fieldset>
          <legend>Push Notifications</legend>
          <div>
            <p>These are delivered by sms to your mobile phone</p>
            <input
              type="radio"
              name="notification"
              id="everything"
              value="Everything"
              onChange={changeHandler}
            />
            <label htmlFor="notification">Everything</label>
            <br />
            <input
              type="radio"
              name="notification"
              id=""
              value="Same as email"
              onChange={changeHandler}
            />
            <label htmlFor="notification">Same as Email</label>
            <br />
            <input
              type="radio"
              name="notification"
              id="nopushnotifications"
              value="No push notification"
              onChange={changeHandler}
            />
            <label htmlFor="notification">No Push Notifications</label>
            <br />
          </div>
        </fieldset>
        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
