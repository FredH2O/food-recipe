import { useState } from "react";

const SurveyForm = () => {
  const [form, setForm] = useState({
    name: "",
    choices: "",
    feedback: "",
    textarea: "",
    term: false,
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setForm((prev) => {
      const updatedForm = {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
      console.log(updatedForm);

      return updatedForm;
    });
  };

  return (
    <form
      action=""
      className="max-w-md w-full flex flex-col border-2 rounded-lg p-4 space-y-4 bg-slate-800 text-zinc-100 shadow-lg"
    >
      {/* Name */}
      <label className="text-lg font-medium">Name</label>
      <input
        type="text"
        className="p-2 rounded-md text-black w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        maxLength={15}
        name="name"
        onChange={handleChange}
      />

      {/* Where did you hear about us? */}
      <fieldset className="space-y-2">
        <legend className="text-lg font-medium">
          Where did you hear about us?
        </legend>

        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="friend"
            value="friend"
            name="choices"
            checked={form.choices === "friend"}
            className="accent-blue-400"
            onChange={handleChange}
          />
          <label htmlFor="friend" className="cursor-pointer">
            Friend
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="google"
            value="google"
            checked={form.choices === "google"}
            name="choices"
            className="accent-blue-400"
            onChange={handleChange}
          />
          <label htmlFor="google" className="cursor-pointer">
            Google Search
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="ads"
            value="ads"
            name="choices"
            onChange={handleChange}
            checked={form.choices === "ads"}
            className="accent-blue-400"
          />
          <label htmlFor="ads" className="cursor-pointer">
            Advertisement
          </label>
        </div>
      </fieldset>

      {/* Did the web app help? */}
      <label className="text-lg font-medium">
        Did the app help you in any way?
      </label>
      <select
        className="text-slate-600 p-2 rounded-md w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
        name="feedback"
        onChange={handleChange}
      >
        <option value="">Choose one.</option>
        <option value="Yes">Yes, somehow 😄.</option>
        <option value="No">Nope, didn't help 😣.</option>
        <option value="Abit">A bit 🤨.</option>
      </select>

      {/* Comments */}
      <label className="text-lg font-medium">Any other comments?</label>
      <textarea
        rows={5}
        maxLength={500}
        name="textarea"
        onChange={handleChange}
        className="p-2 rounded-md w-full border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none text-black"
      ></textarea>

      {/* Terms & Conditions */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={form.term}
          name="term"
          className="accent-blue-400"
          onChange={handleChange}
        />
        <label className="cursor-pointer">
          I agree to the terms and conditions
        </label>
      </div>

      {/* Submit Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md w-full transition">
        Submit
      </button>
    </form>
  );
};

export default SurveyForm;
