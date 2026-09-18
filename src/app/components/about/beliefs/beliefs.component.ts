import { Component } from '@angular/core';

interface Belief {
  title: string;
  content: string;
}

@Component({
  selector: 'app-about-beliefs',
  templateUrl: './beliefs.component.html',
  styleUrls: ['./beliefs.component.scss']
})
export class BeliefsComponent {
  beliefs: Belief[] = [
    { title: 'About the Bible', content: 'The Bible is the authoritative Word of God. It was written by human authors under the inspiration of the Holy Spirit and is the supreme source of truth for Christian beliefs and living.' },
    { title: 'About God', content: 'God is the Creator and Ruler of the universe. He has eternally existed in three persons: the Father, the Son, and the Holy Spirit. These three are co-equal and are one God.' },
    { title: 'About Jesus', content: 'Jesus Christ is the Son of God, fully God and fully man. He lived a sinless life, died for our sins, rose from the dead, ascended to the Father, and will return in power and glory.' },
    { title: 'About the Holy Spirit', content: 'The Holy Spirit is co-equal with the Father and the Son. He empowers believers, provides spiritual understanding and guidance, and gives every believer a spiritual gift.' },
    { title: 'About Mankind', content: 'Men and women were created in the spiritual image of God. Although every person has potential for good, all are marred by disobedience toward God, which separates people from Him.' },
    { title: 'About Salvation', content: 'Salvation is a gift from God. It cannot be earned through self-improvement or good works, but is received by trusting in Jesus Christ and His offer of forgiveness.' },
    { title: 'About the Church', content: 'The Church is the visible body of Christ, sent into the world to glorify God and proclaim the gospel of Jesus Christ.' },
    { title: 'About the Resurrection', content: 'Jesus Christ is returning one day to judge both the living and the dead and to usher in the fullness of God\'s kingdom on earth.' },
    { title: 'About Eternity', content: 'People were created to exist forever, either separated from God by sin or united with God through forgiveness and salvation.' },
    { title: 'About Marriage', content: 'Marriage and sexual intimacy are gifts from God to be stewarded for His glory. We believe biblical marriage is a lifelong covenant between one man and one woman.' }
  ];
}
