import {
  Banner,
  Blockquote,
  Button,
  Chip,
  Figure,
  Heading,
  InlineCode,
  Box,
  Link,
  Link as StyledLink,
  List,
  ListItem,
  VisuallyHidden,
  Stack,
} from '@ds-pack/daisyui'
import Interactive from './interactive'
import NextLink from 'next/link'

export default function Page() {
  return (
    <Stack gap={4} className="m-10">
      <StyledLink is={NextLink} href="/headings">
        Headings
      </StyledLink>
      <Banner variant="info">Yo!</Banner>
      <Banner variant="success">Yo!</Banner>
      <Banner variant="warning">Yo!</Banner>
      <Banner variant="error">Yo!</Banner>
      <Blockquote>Hello!</Blockquote>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="accent">Accent</Button>
      <Button variant="info">Info</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="success">Success</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="error">Error!</Button>
      <Button variant="outline" className="btn-error">
        Error outline
      </Button>
      <Interactive />
      <Chip>Chip!</Chip>
      <Chip variant="outline">Chip!</Chip>
      <Chip variant="primary">Chip!</Chip>
      <Chip variant="secondary">Chip!</Chip>
      <Chip variant="accent">Chip!</Chip>
      <Chip variant="ghost">Chip!</Chip>
      <Chip variant="info">Chip!</Chip>
      <Chip variant="success">Chip!</Chip>
      <Chip variant="warning">Chip!</Chip>
      <Chip variant="error">Chip!</Chip>
      <Figure
        src="https://images.unsplash.com/photo-1679599673055-62de1177335d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1286&q=80"
        alt=""
        caption="Yo yo!"
      />
      <Heading is="h1" variant="lead">
        Lead
      </Heading>
      <Heading is="h1" variant="h1">
        H1
      </Heading>
      <Heading is="h2" variant="h2">
        H2
      </Heading>
      <Heading is="h3" variant="h3">
        H3
      </Heading>
      <Heading is="h3" variant="subhead">
        Subhead
      </Heading>
      <Box>
        <InlineCode>const foo = "bar";</InlineCode>
      </Box>
      <Box>
        Code with some <InlineCode size="small">"text"</InlineCode> around it!
      </Box>
      <Box>
        <Link is="a" href="#" variant="neutral">
          neutral link
        </Link>{' '}
        <Link is="a" href="#" variant="primary">
          primary link
        </Link>{' '}
        <Link is="a" href="#" variant="secondary">
          secondary link
        </Link>{' '}
        <Link is="a" href="#" variant="accent">
          accent link
        </Link>{' '}
        <Link is="a" href="#" variant="success">
          success link
        </Link>{' '}
        <Link is="a" href="#" variant="info">
          info link
        </Link>{' '}
        <Link is="a" href="#" variant="warning">
          warning link
        </Link>{' '}
        <Link is="a" href="#" variant="error">
          error link
        </Link>
      </Box>
      <List>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
      </List>
      <List variant="ordered">
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
      </List>
      <List variant="unordered">
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
      </List>
      <VisuallyHidden>Hello there!</VisuallyHidden>
    </Stack>
  )
}

export let revalidate = 0
export let dynamic = 'force-dynamic'
