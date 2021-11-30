/**
 * modules
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

    /**
     * Learning routes
     *
     * routes for learning elements
     */
    {
        path: 'post',
        loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule),
    },
    {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
    },
    {
        path: '**',
        redirectTo: 'post'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
