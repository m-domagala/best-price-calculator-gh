import { DATA_FETCHING_ERROR_MESSAGE } from '../../../constants';

interface IErrorMessage {
  error: unknown;
}

function ErrorMessage({ error }: IErrorMessage) {
  return (
    <section>
      <p>
        {DATA_FETCHING_ERROR_MESSAGE}:{' '}
        <b className='color-red'>{`"${error}"`}</b>
      </p>
    </section>
  );
}

export default ErrorMessage;
