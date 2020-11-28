import { Button, Card, Icon, NavButton } from 'plants-ui';
import React from 'react';
import GlobalLayout from './../components/templates/GlobalLayout';
import WysiwygEditor from './../components/utility/WysiwygEditor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'codemirror/lib/codemirror.css';

const Test = () => {
  const introduceInput = (e) => {
    console.log(e);
  };
  return (
    <GlobalLayout>
      <Card cardTitle="대회 소개">
        <WysiwygEditor onChange={introduceInput}></WysiwygEditor>
      </Card>
    </GlobalLayout>
  );
};

export default Test;
