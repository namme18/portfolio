import Head from 'next/head';

const Meta = ({keywords, description, title}) => {
    return (
        <Head>
            <meta name='viewport' content='width=devide-width, initial-scale=1' />
            <meta name='keyword' content={keywords} />
            <meta name='description' content={description} />
            <link rel='ico' href='/favico.ico' />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Emmanuel F. Morales jr.',
    keywords: 'Proffessional Porfolio, Latest portfolio design',
    description: 'Portfolio that showcase web designs'
}

export default Meta
