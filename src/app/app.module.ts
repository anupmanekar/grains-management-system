import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FeaturesComponent } from './components/features/features.component';
import { FormsModule } from '@angular/forms';
import { FeatureDetailComponent } from './components/feature-detail/feature-detail.component';
import { FeatureService } from './services/feature.service';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BuyEntriesComponent } from './components/buy-entries/buy-entries.component';
import { BuyEntryService } from './services/buy-entry.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatInputModule, MatTableModule, MatToolbarModule, MatFormFieldModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, MatSortModule, MatTabsModule, MatOptionModule, MatDatepickerModule, MatSelectModule} from '@angular/material';
import { MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';
import { MemberService } from './services/member.service';
import { AuthGuard } from './_guards/auth.guard';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { BuyEntriesMgmtComponent } from './components/buy-entries-mgmt/buy-entries-mgmt.component';
import { AddBuyEntryComponent } from './components/add-buy-entry/add-buy-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    FeatureDetailComponent,
    MessagesComponent,
    DashboardComponent,
    BuyEntriesComponent,
    LoginComponent,
    BuyEntriesMgmtComponent,
    AddBuyEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, MatToolbarModule, MatInputModule, MatTableModule, MatFormFieldModule, MatIconModule, MatMenuModule,
    MatButtonModule, MatPaginatorModule, MatSortModule, MatTabsModule, MatOptionModule, MatDatepickerModule, MatSelectModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    FeatureService,
    MessageService,
    BuyEntryService,
    HttpClientModule,
    AuthenticationService,
    MemberService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  },
  ],
  bootstrap: [AppComponent],
  exports: [MatMenuModule, MatInputModule, MatTableModule, MatFormFieldModule, BrowserAnimationsModule]
})
export class AppModule { }
