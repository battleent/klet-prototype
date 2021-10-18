import { useState } from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';

import Flex from '@/components/Flex';

const DropDown = styled(Flex)<{ right?: string }>`
  position: absolute;
  flex-flow: column;
  width: 100%;
  z-index: 10;
`;

type Option = {
  id: number;
  text: string;
};

interface SortProps {
  options: Option[];
  onChange: (value: Option) => void;
  defaultValue?: Option;
}

const Sort: React.FC<SortProps> = ({
  onChange,
  defaultValue,
  options,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selected, setSelected] = useState(defaultValue || options[0]);

  const handleChange = (option: Option) => {
    setIsOpened(false);
    setSelected(option);
    onChange(option);
  };
  return (
    <Box {...props}>
      <Box onClick={() => setIsOpened((prev) => !prev)}>{selected.text}</Box>
      {isOpened && (
        <DropDown>
          {options.map((option) => (
            <div key={option.id} onClick={() => handleChange(option)}>
              {option.text}
            </div>
          ))}
        </DropDown>
      )}
    </Box>
  );
};

export default Sort;
