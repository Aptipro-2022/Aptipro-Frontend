import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AccloginComponent } from './acclogin/acclogin.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsAdminComponent } from './questions-admin/questions-admin.component';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { BlogComponent } from './blog/blog.component';
import { TestingComponent } from './testing/testing.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule  } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { userPhoneReducer } from './redux/reducers/user-phone.reducer';
import { userdetailsReducer } from './redux/reducers/user-details.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DataEffects } from './redux/effects/user-details.effects';
import { QuestionEffects } from './redux/effects/questions.effects';
import { QuestionsReducer } from './redux/reducers/questions.reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { QuestionsDialogComponent } from './questions-dialog/questions-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    AccloginComponent,
    QuestionsComponent,
    QuestionsAdminComponent,
    ScenariosComponent,
    UserprofileComponent,
    BlogComponent,
    TestingComponent,
    LoginFormComponent,
    QuestionsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    StoreModule.forRoot({ userPhone : userPhoneReducer, userdetails : userdetailsReducer, questions : QuestionsReducer}),
    EffectsModule.forRoot([DataEffects, QuestionEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
