import Head from 'next/head';
import React from 'react';
import GlobalLayout from './../components/templates/GlobalLayout';
import Counter from './../components/test/Counter';

export default function Community() {
  return (
    <div>
      <GlobalLayout>
        <Counter />
        커뮤니티
        <br />
        <div style={{ height: '1300px', backgroundColor: 'blue' }}>
          가나다라마바사 가나다라마바사 가나다라마바사
        </div>
        가나다라마바사 가나다라마바사 가나다라마바사 가나다라마바사
        가나다라마바사
      </GlobalLayout>
    </div>
  );
}
