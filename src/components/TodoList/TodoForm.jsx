const TodoForm = ({ onFormSubmit, toggleUpdate, inputValue, setInputValue }) => {


  const handleInput = (value) => {
    setInputValue({id: value, content: value, checked: false});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(inputValue);
    setInputValue({id: "", content: "", checked: false});
  };

  return (
    <section className="flex justify-center mt-5">
      <form className="flex justify-center " onSubmit={handleSubmit}>
        <div>
          <input
            className="h-10 px-8 py-2 text-xl text-black bg-white outline-none w-50 fh:w-65 f8:w-85 sm:w-100 sm:h-12 md:w-120 md:h-14 9h:w-160 lg:w-180 rounded-ss-xl rounded-es-xl"
            value={inputValue.content}
            onChange={(e) => handleInput(e.target.value)}
            type="text"
            autoComplete="off"
          />
        </div>
        <div>
          <button title={toggleUpdate ? "Upd. Task" : "Add Task"} className=" hover:bg-blue-700 transition-colors duration-100 cursor-pointer h-10 px-2 py-2 text-sm bg-blue-600 outline-none w-22 fh:w-28 f8:w-35 sm:w-40 sm:h-12 md:h-14 rounded-se-xl rounded-ee-xl">
            { toggleUpdate ? <span>Upd. Task</span> : <span>Add Task</span>}
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
