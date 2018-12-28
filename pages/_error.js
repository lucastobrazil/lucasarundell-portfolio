import React from 'react';
import Link from 'next/link';
import Section from '../components/Section';

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode };
    }

    render() {
        return (
            <Section>
                <p>
                    {this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'}
                </p>
                <p>
                    Oops... maybe go <Link href="/"> home</Link>?
                </p>
            </Section>
        );
    }
}
