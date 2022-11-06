import { Answer, Container, Entries, Entry, Question } from "./styles";

const faq: { question: string; answer: string }[] = [
  {
    question: "What is The Gobbler's Union?",
    answer:
      "A united front of Art Gobbler's - tired of years of oppression in the art factories of the world. The Art Gobbler's Union works together to acquire Art Gobbler's. By pooling Gobbler's the Union can acquire enough $GOO to buy more Gobbler's and Blank Pages faster than individuals.",
  },

  {
    question: "How do I join the Gobbler's Union?",
    answer:
      "You can join the union at https://www.juicebox.money/@gobblerunion\nThe DAO has an automated funding cycle that restarts every 3 days. You'll be able to trade $ETH for $GOBBLE which is the DAO's token.\nEach cycle, the amount of $GOBBLE paid per $ETH decreases by 5%.",
  },
  {
    question: "What does $GOBBLE do?",
    answer:
      "The $GOBBLE token lets you take part in the DAO voting.\nAs the DAO earns $GOO, you'll also be able to ragequit at any time, redeeming your $GOBBLE for a portion of the $GOO owned by the DAO.",
  },
  {
    question: "Does the Union have fees?",
    answer:
      "Yes - there is a 5% union due on the tokens produced by the DAO, both to reward operators and to fund additional community efforts.\nJuicebox also charges us a 2.5% fee on distributions, but in return the DAO receives some JBX token.",
  },
  {
    question: "Is there a multisig?",
    answer:
      "Yes, the multisig safe is https://etherscan.io/address/0x6761A059Eb3881627ad33553DbeF81a2ba576DBf - it currently only has one signer right now (as lets be real, I came up with this crazy idea this morning)\nWe'll be adding more signers as the community grows.",
  },
  {
    question: "How do I know this isn't a rug?",
    answer:
      "You don't. Right now the multisig is 1/1. It's a horrible idea to use this until it's expanded.",
  },
  {
    question: "Is this a good investment?",
    answer:
      "It's not an investment at all. It's one of the dumbest things you can do with your money. We're literally trying to buy jpegs to eat other jpegs. This is a cult.",
  },
  {
    question: "Can I redeem my $GOBBLEs for an Art Gobbler?",
    answer:
      "To start no, but the DAO may decide to change this in the future by vote.",
  },
  {
    question: "Do we have a website/twitter?",
    answer:
      "No, we are a chaotic band of misfits that is just starting out. We'll get there.",
  },
  {
    question: "I want a refund!",
    answer:
      "Please send a self-addressed stamped envelope to Paradigm and enclose a copy of your notarized sob-story.",
  },
  {
    question: "Where can I learn more?",
    answer: "https://twitter.com/adamscochran/status/1587135687920328707",
  },
];

function format(value: string) {
  return value
    .split(" ")
    .map((e) =>
      e.startsWith("http") ? (
        <a href={e} target="_blank" rel="noreferrer">
          {e}
        </a>
      ) : (
        <>{e}</>
      )
    )
    .reduce(
      (acc: any, x: JSX.Element) => (acc === null ? [x] : [acc, " ", x]),
      null
    );
}

export default function FAQ() {
  return (
    <Container>
      <h1>FAQ</h1>
      <Entries>
        {faq.map(({ question, answer }, index) => (
          <Entry key={question}>
            <Question>
              {index + 1}. {format(question)}
            </Question>
            <Answer>{format(answer)}</Answer>
          </Entry>
        ))}
      </Entries>
    </Container>
  );
}
