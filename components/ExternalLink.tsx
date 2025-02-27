import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors?.primary || '#3B82F6'};
  text-decoration: underline;
`;

export function ExternalLink({ href, ...rest }: Props) {
  return (
    <StyledLink
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
