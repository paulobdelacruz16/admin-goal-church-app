import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-about-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  @Input() goalContent: any;
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.goalContent.videourl
    );
    console.log('goalContent - mission', this.goalContent);
  }


  paragraphs = [
    'New to faith? New to Hawaii Kai? Or simply seeking a fresh start? Whatever your story, we warmly welcome you to New Hope Hawaii Kai. Our ohana is here to embrace you with the Aloha Spirit and God\'s love.',
    'We have created a space where you can experience God\'s presence, grow in faith, and find genuine community. Our approach is refreshingly simple because we know life can be complicated enough.',
    'At New Hope Hawaii Kai, we are passionate about loving God wholeheartedly, caring deeply for one another, and sharing the good news of Jesus with our island and beyond. Join us as we journey together, celebrate God\'s grace, and discover the joy of living with purpose.',
    'Come as you are. We have saved a place for you in our ohana.'
  ];

}
