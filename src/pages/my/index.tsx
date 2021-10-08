import styled from 'styled-components';

import Wrapper from '@/components/Wrapper';
import { Flex, Text } from 'rebass';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Spacer from '@/components/Spacer';
import Stack from '@/components/Stack';
import Button from '@/components/Button';

const Group = styled.div`
  display: inline-block;
  height: 343px;
  background-color: #ffffff;
`;

const LabelBlock = styled.div`
  width: 120px;
  height: 47px;
`;

const Space = styled.div`
  margin-top: 14px;
`;

const My: React.FC = () => {
  return (
    <Group>
      <Text color="#343434" fontSize="18px" fontWeight="bold">
        비밀번호 변경
      </Text>
      <Spacer size={16} />
      <Stack gap={20}>
        <Stack gap={8}>
          <Flex flexDirection="row" flex="1">
            <LabelBlock>
              <Space />
              <Label>기존 비밀번호</Label>
            </LabelBlock>
            <Input type="password" placeholder="ㆍㆍㆍㆍㆍㆍㆍㆍㆍㆍ" />
          </Flex>
        </Stack>
        <Stack gap={8}>
          <Flex flexDirection="row" flex="1">
            <LabelBlock>
              <Space />
              <Label>새 비밀번호</Label>
            </LabelBlock>
            <Input type="password" placeholder="ㆍㆍㆍㆍㆍㆍㆍㆍㆍㆍ" />
          </Flex>
        </Stack>
        <Stack gap={8}>
          <Flex flexDirection="row" flex="1">
            <LabelBlock>
              <Space />
              <Label>비밀번호 재입력</Label>
            </LabelBlock>
            <Input type="password" placeholder="ㆍㆍㆍㆍㆍㆍㆍㆍㆍㆍ" />
          </Flex>
        </Stack>
      </Stack>
      <Spacer size={40} />
      <Flex justifyContent="flex-end">
        <Button type="submit">비밀번호 변경</Button>
      </Flex>
    </Group>
  );
};

export default My;
