const SurveyForm = () => {
  return (
    <form
      action=""
      className="flex flex-col border-2 rounded p-3 space-y-2 bg-slate-800 text-zinc-100"
    >
      {/* name */}
      <label htmlFor="">Name</label>
      <input type="text" className="p-1 rounded text-black" />

      {/* where did you hear us from ? // radio choices  */}
      <div className="space-y-1">
        <label htmlFor="">Where did you hear about us?</label>

        <div className="space-x-1">
          <input type="radio" id="friend" value="friend" name="choices" />
          <label htmlFor="friend">Friend</label>
        </div>

        <div className="space-x-1">
          <input type="radio" id="google" value="google" name="choices" />
          <label htmlFor="google">Google Search</label>
        </div>

        <div className="space-x-1">
          <input type="radio" id="ads" value="ads" name="choices" />
          <label htmlFor="ads">Advertisement</label>
        </div>
      </div>

      {/* whats your ethnicity ? select option choices*/}
      <label htmlFor="">How important is food preparation for you?</label>
      <select name="" id="" className="text-slate-600 p-1 rounded">
        <option value="">Choose one.</option>
        <option value="">I try to do it fast.</option>
        <option value="">Slow, making sure everything is right.</option>
        <option value="">I just go with the flow.</option>
      </select>
    </form>
  );
};

export default SurveyForm;
