import { FC } from 'react';
import { WS_CHAR_CODE } from '@lib/ascii-chars';
import PageWrapper from '@components/page-wrapper';
import { Col, Container, Row } from 'react-bootstrap';
import Head from 'next/head';

const DirectToken: FC<Record<string, never>> = () => {
  return (
    <PageWrapper>
      <Head>
        <title>{'Direct Token - Smartblock Docs'}</title>
      </Head>
      <Container className='my-5'>
        <Row>
          <Col>
            <h1 className='fw-bold'>Direct Token</h1>
            <hr />
            <p>
              Since <b>JSON Web Tokens</b> (JWT) require an authentication process, using a programmable, 
              simple, private and role-based token system to use and integrate our services.
            </p>
            <p>
              An <b>Smartblock Direct Token</b> (SDT) is a unique token which can be used to access to the 
              API private endpoints<sup>*</sup>.
            </p>
            <h2 id='considerations'>Considerations</h2>
            <p>
              By default, an SDT <span className='text-danger'>does not expire</span>, but you can modify 
              this by setting up an specific expiration date.
            </p>
            <small className='fst-italic'>
              <sup>*</sup> The response can variate depending on the SDT access configuration and the endpoint rules.
            </small>
            <h2 id='how-to-obtain-an-sdt'>How to obtain an SDT</h2>
            <p>
              Steps:
            </p>
            <ol>
              <li>
                In your <a href='https://smartblock.cl/account/preferences' target='_blank' rel='noreferrer'>account preferences panel</a>, navigate 
                to <b>API Access</b> {'>'} <b>Direct Tokens</b> and press the <b>New Token</b> button.
              </li>
              <li>
                Add a <b>Token Alias</b> (important to identify the token in the future<sup>**</sup>).
              </li>
              <li>
                Check and assign the respective permissions***, be sure to review the configuration to prevent unexpected 
                interactions.
              </li>
              <li>
                If you need the token for production, <b>uncheck</b> the option <b>Sandbox Mode</b>.
              </li>
              <li>
                If the configuration is correct, press the <b>Create</b> button to get a new token.
              </li>
              <li>
                Copy and save the generated token and press <b>Confirm</b>. Be sure to save the token, you will not be able to see it again.
              </li>
            </ol>
            <small className='fst-italic'><sup>**</sup> The token will only be visible in the creation step.</small>
            <br />
            <small className='fst-italic'><sup>***</sup> Cannot be modified after the being created.</small>
            <h2 id='how-to-use'>How to use</h2>
            <p>
              Add the token in your request headers.
            </p>
            <p>
              <code>
                {String.fromCharCode(WS_CHAR_CODE).repeat(4)}Direct-Token: <b>your-direct-token</b>
              </code>
            </p>
            <p>
              This can variate depending on the REST client you are implementing.
            </p>
            <p>
              Note if you send the JSON Web Token and Direct Token in the request, if the tokens are valid and assigned 
              in the correct headers, the JSON Web Token will be processed by default.
            </p>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}

export default DirectToken;
