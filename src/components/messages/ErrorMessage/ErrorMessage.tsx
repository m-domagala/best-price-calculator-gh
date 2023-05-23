interface IErrorMessage {
  error: unknown;
}

function ErrorMessage({ error }: IErrorMessage) {
  return (
    <section>
      <p>
        Nie udało się pobrać danych:{' '}
        <b className='errorMessage'>{`"${error}"`}</b>
      </p>
    </section>
  );
}

export default ErrorMessage;
