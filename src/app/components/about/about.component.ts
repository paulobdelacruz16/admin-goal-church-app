import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ConfigService } from 'src/app/services/config.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  goalContent: any;

  private readonly pageUrl = 'https://goal-church-app.vercel.app/about';
  private readonly pageTitle = 'GOAL Church - About us';
  private readonly pageDescription = 'about us';
  private readonly pageImage = 'https://raw.githubusercontent.com/paulobdelacruz16/images/main/571144950_1116995010587599_1938066918544950676_n.jpg';

  constructor(
    private configService: ConfigService,
    private loaderService: LoaderService,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.setSocialMetadata();
    this.loaderService.start();
    this.configService
      .getAllSection({ url: 'about' })
      .subscribe((data: any) => {
        this.goalContent = data?.data?.data;
        console.log('goalContent', this.goalContent);
        this.loaderService.stop();
      });
  }

  private setSocialMetadata(): void {
    this.title.setTitle(this.pageTitle);

    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: this.pageUrl });
    this.meta.updateTag({ property: 'og:title', content: this.pageTitle });
    this.meta.updateTag({ property: 'og:description', content: this.pageDescription });
    this.meta.updateTag({ property: 'og:image', content: this.pageImage });
    this.meta.updateTag({ property: 'og:image:secure_url', content: this.pageImage });
    this.meta.updateTag({ property: 'og:image:type', content: 'image/jpeg' });
    this.meta.updateTag({ property: 'og:image:alt', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: this.pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: this.pageDescription });
    this.meta.updateTag({ name: 'twitter:image', content: this.pageImage });
  }
}
