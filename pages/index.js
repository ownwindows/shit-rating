import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
// import useSWR from 'swr';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

// export async function getServerSideProps(context) {
//     return {
//         props: {
//             // props for your component
//         },
//     };
// }

// https://swr.vercel.app/
function Profile() {
    const { data, error } = useSWR('/api/user', fetch);

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    return <div>hello {data.name}!</div>;
}

export default function Home( { allPostsData } ) {
    return (
        <Layout home>
            <Head>
                <title>{ siteTitle }</title>
            </Head>
            <section className={ utilStyles.headingMd }>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{ ' ' }
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>
            <section className={ `${ utilStyles.headingMd } ${ utilStyles.padding1px }` }>
                <h2 className={ utilStyles.headingLg }>Blog</h2>
                <ul className={ utilStyles.list }>
                    { allPostsData.map( ( { id, date, title } ) => (
                        <li className={ utilStyles.listItem } key={ id }>
                            { title }
                            <br/>
                            { id }
                            <br/>
                            { date }
                        </li>
                    ) ) }
                </ul>
            </section>
        </Layout>
    );
}