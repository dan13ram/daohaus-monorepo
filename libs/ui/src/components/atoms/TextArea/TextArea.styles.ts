import styled from 'styled-components';

import { field } from '../../../theme/component/fieldFamily';

export const BaseTextArea = styled.textarea<{ height?: string }>`
  background-color: ${({ theme }) => theme.textarea.bg};
  border: 1px solid ${({ theme }) => theme.textarea.border};
  border-radius: ${field.borderRadius};
  color: ${({ theme }) => theme.textarea.color};
  font-size: ${field.fontSize};
  font-weight: ${field.fontWeight};
  font-family: ${({ theme }) => theme.font.family.body};
  height: ${({ height }: { height?: string }) => height || '12rem'};
  line-height: 150%;
  letter-spacing: 1.5px;
  max-width: ${field.size.lg};
  padding: 1.2rem 1.8rem;
  resize: none;
  transition: ${field.transition};
  width: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.textarea.placeholder};
  }

  &:hover {
    background-color: ${({ theme }) => theme.textarea.hover.bg};
    border: 1px solid ${({ theme }) => theme.textarea.hover.border};
  }

  :focus {
    background-color: ${({ theme }) => theme.textarea.focus.bg};
    border: 1px solid ${({ theme }) => theme.textarea.focus.border};
    outline: none;
  }

  :disabled {
    background-color: ${({ theme }) => theme.textarea.disabled.bg};
    border: 1px solid ${({ theme }) => theme.textarea.disabled.border};
    cursor: not-allowed;
    font-style: italic;

    ::placeholder {
      color: ${({ theme }) => theme.textarea.disabled.placeholder};
    }
  }

  &.full {
    max-width: ${field.size.full};
  }

  &.success {
    border: 1px solid ${({ theme }) => theme.textarea.success.border};
  }

  &.warning {
    border: 1px solid ${({ theme }) => theme.textarea.warning.border};
  }

  &.error {
    border: 1px solid ${({ theme }) => theme.textarea.error.border};
  }
`;
