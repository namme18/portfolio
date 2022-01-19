import Meta from '../components/Meta';
import Theme from '../styles/Theme';

const MyApp = ({Component, pageProps}) => {
  return(
    <>
      <Meta />
        <Theme>
          <Component {...pageProps} />
        </Theme>
    </>
  )
}

export default MyApp
