const Year = new Date().getFullYear()

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    darkMode: true,
    footer: (
      <small style={{ display: 'block', marginTop: '8rem' }}>
        <time>{Year}</time> © SleepNov4.
        <style jsx>{`
            a {
            float: right;
           }
            @media screen and (max-width: 480px) {
            article {
            padding-top: 2rem;
            padding-bottom: 4rem;
           }
         }
      `}</style>
    </small>
    )
}