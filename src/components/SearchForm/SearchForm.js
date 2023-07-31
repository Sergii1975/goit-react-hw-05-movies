import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { FormS, Input } from './SearchForm.styled';


const SearchForm = ({ onSubmit }) => {

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.elements.query.value;
    if (searchValue.trim() === '') {
      Notify.warning('Enter your request, please...');
      return;
    };
    onSubmit(searchValue);
    form.reset();
  };

  return (
    <div>
      <FormS action="" onSubmit={handleSubmit}>
        <Input type="text"
          placeholder="Search movie" autoComplete="off"
          autoFocus name="query" />
        <button type="submit">Search</button>
      </FormS>
    </div>
  );
};


Notify.init({
width: '500px',
fontSize: '20px',
position: 'right-top',
closeButton: false,
});


export default SearchForm;