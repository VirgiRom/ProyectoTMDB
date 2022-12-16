import {Spinner, Button} from 'react-bootstrap'

function Loading(props) {
  const { loading, children } = props;

  if (loading) {
    return (
      <div>
        <Spinner>
          <>
            <Button variant="success" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </>
        </Spinner>
      </div>
    );
  } else {
    return <>{children}</>;
  }
}
export default Loading;
