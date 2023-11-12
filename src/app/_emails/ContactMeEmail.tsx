import React from 'react';
import {Html, Body, Head, Heading, Hr, Container, Preview, Section, Text, Tailwind} from '@react-email/components'

type EmailMessageType={
    propemail: string,
    propmessage: string
}

export default function ContactMeEmail({propemail , propmessage } : EmailMessageType) {
  return (
    <Html>
        <Head/>
        <Preview>New Message from Portfolio</Preview>
        <Tailwind>
            <Body className='bg-slate-200'>
                <Container>
                    <Section className='bg-white  my-10 px-8 py-4 rounded-md text-center break-words'>
                        <Heading className='leading-tight text-[1.5rem]'>You received a message from: {propemail}</Heading>
                        <Text>{propmessage}</Text>
                        <Hr/>
                        <Text>Best of luck!</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
