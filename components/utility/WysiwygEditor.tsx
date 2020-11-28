import dynamic from 'next/dynamic';
import * as React from 'react';
import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';
import { TuiEditorWithForwardedProps } from './TuiEditorWithForwardedProps';

const Editor = dynamic<EditorProps>(
  () => import('@toast-ui/react-editor').then((m) => m.Editor),
  { ssr: false },
);
