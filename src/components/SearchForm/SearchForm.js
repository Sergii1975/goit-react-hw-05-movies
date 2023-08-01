import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Form, Input } from './SearchForm.styled';


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
      <Form action="" onSubmit={handleSubmit}>
        <Input type="text"
          placeholder="Search movie" autoComplete="off"
          autoFocus name="query" />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

Notify.init({
width: '500px',
fontSize: '20px',
position: 'right-top',
closeButton: false,
});


export default SearchForm;