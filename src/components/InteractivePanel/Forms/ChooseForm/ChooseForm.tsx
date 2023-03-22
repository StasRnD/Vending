import '../../InteractivePanel.scss';

export const ChooseForm = () => {
  return (
    <form className='interactive-panel__form'>
      <label
        htmlFor='choose-product'
        className='interactive-panel__label'
      ></label>
      <input
        type='number'
        step='1'
        min='1'
        id='choose-product'
        className='interactive-panel__input'
        placeholder='...'
      />
    </form>
  );
};
