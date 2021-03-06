import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const originalRenderPage = ctx.renderPage
      const sheet = new ServerStyleSheet()
      try {
        ctx.renderPage = () => originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props}></App>)
        })
        const props = await Document.getInitialProps(ctx)
        return {
          ...props,
        styles: <>
            {props.styles}
            {sheet.getStyleElement()}
          </>
        }
      } finally {
        sheet.seal()
      }
    }
    render () {
      return (
        <Html>
          <Head>
          </Head>
          <body>
            <Main></Main>
            <NextScript></NextScript>
          </body>
        </Html>
      )
    }
}



export default MyDocument