import React from 'react'
import { AdminCrudPosts } from '../components/AdminCrudPosts/AdminCrudPosts'
import { AdminNavigation } from '../components/AdminNavigation/AdminNavigation'

/* page of adminForum -> render in /adminforum */
function AdminForumPage() {
    return (
        <>
            <AdminNavigation />
            <AdminCrudPosts name={"Foro"} nameType={"questions"}>
                <th>Etiquetas</th>
                <th>Imagen</th>
            </AdminCrudPosts>
        </>
    )
}


export { AdminForumPage }