
// function Songs() {
// const songDetails = [
//   {
//     "message": {
//       "header": {
//         "status_code": 200,
//         "execute_time": 0.083225965499878,
//         "available": 19
//       },
//       "body": {
//         "track_list": [
//           {
//             "track": {
//               "track_id": 88429633,
//               "track_name": "Rosanna",
//               "track_name_translation_list": [],
//               "track_rating": 75,
//               "commontrack_id": 13720724,
//               "instrumental": 0,
//               "explicit": 0,
//               "has_lyrics": 1,
//               "has_subtitles": 1,
//               "has_richsync": 1,
//               "num_favourite": 72,
//               "album_id": 21155299,
//               "album_name": "Toto IV",
//               "artist_id": 40402260,
//               "artist_name": "TOTO",
//               "track_share_url": "https://www.musixmatch.com/lyrics/Tot%C3%B2/Rosanna-Live?utm_source=application&utm_campaign=api&utm_medium=General+Assembly+Australia%3A1409622852688",
//               "track_edit_url": "https://www.musixmatch.com/lyrics/Tot%C3%B2/Rosanna-Live/edit?utm_source=application&utm_campaign=api&utm_medium=General+Assembly+Australia%3A1409622852688",
//               "restricted": 0,
//               "updated_time": "2021-12-10T00:07:05Z",
//               "primary_genres": {
//                 "music_genre_list": [
//                   {
//                     "music_genre": {
//                       "music_genre_id": 21,
//                       "music_genre_parent_id": 34,
//                       "music_genre_name": "Rock",
//                       "music_genre_name_extended": "Rock",
//                       "music_genre_vanity": "Rock"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           {
//             "track": {
//               "track_id": 721668,
//               "track_name": "In the Shape of a Heart",
//               "track_name_translation_list": [],
//               "track_rating": 54,
//               "commontrack_id": 175188,
//               "instrumental": 0,
//               "explicit": 0,
//               "has_lyrics": 1,
//               "has_subtitles": 1,
//               "has_richsync": 0,
//               "num_favourite": 3,
//               "album_id": 10280632,
//               "album_name": "Lives In the Balance",
//               "artist_id": 506,
//               "artist_name": "Jackson Browne",
//               "track_share_url": "https://www.musixmatch.com/lyrics/Jackson-Browne/In-the-Shape-of-a-Heart?utm_source=application&utm_campaign=api&utm_medium=General+Assembly+Australia%3A1409622852688",
//               "track_edit_url": "https://www.musixmatch.com/lyrics/Jackson-Browne/In-the-Shape-of-a-Heart/edit?utm_source=application&utm_campaign=api&utm_medium=General+Assembly+Australia%3A1409622852688",
//               "restricted": 0,
//               "updated_time": "2020-11-20T02:55:33Z",
//               "primary_genres": {
//                 "music_genre_list": [
//                   {
//                     "music_genre": {
//                       "music_genre_id": 14,
//                       "music_genre_parent_id": 34,
//                       "music_genre_name": "Pop",
//                       "music_genre_name_extended": "Pop",
//                       "music_genre_vanity": "Pop"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           {
//             "track": {
//               "track_id": 90330988,
//               "track_name": "Healing Hands",
//               "track_name_translation_list": [],
//               "track_rating": 56,
//               "commontrack_id": 62231,
//               "instrumental": 0,
//               "explicit": 0,
//               "has_lyrics": 1,
//               "has_subtitles": 1,
//               "has_richsync": 0,
//               "num_favourite": 55,
//               "album_id": 21269704,
//               "album_name": "Sleeping With the Past (Remastered)",
//               "artist_id": 136,
//               "artist_name": "Elton John",
//               "track_share_url": "https://www.musixmatch.com/lyrics/Elton-John/Healing-Hands?utm_source=application&utm_campaign=api&utm_medium=General+Assembly+Australia%3A1409622852688",
//               "track_edit_url": "https://www.musixmatch.com/lyrics/Elton-John/Healing-Hands/edit?utm_source=application&utm_campaign=api&utm_medium=General+Assembly+Australia%3A1409622852688",
//               "restricted": 0,
//               "updated_time": "2020-09-28T12:13:06Z",
//               "primary_genres": {
//                 "music_genre_list": [
//                   {
//                     "music_genre": {
//                       "music_genre_id": 14,
//                       "music_genre_parent_id": 34,
//                       "music_genre_name": "Pop",
//                       "music_genre_name_extended": "Pop",
//                       "music_genre_vanity": "Pop"
//                     }
//                   }
//                 ]
//               }
//             }
//           },
//           {
//             "track": {
//               "track_id": 245448359,
//               "track_name": "Who's Crying Now (2022 Remaster)",
//               "track_name_translation_list": [],
//               "track_rating": 60,
//               "commontrack_id": 12164301,
//               "instrumental": 0,
//               "explicit": 0,
//               "has_lyrics": 1,
//               "has_subtitles": 1,
//               "has_richsync": 0,
//               "num_favourite": 289,
//               "album_id": 54145290,
//               "album_name": "Escape (2022 Remaster)",
//               "artist_id": 40664516,
//               "artist_name": "Journey",
//               "track_share_url": "https://www.musixmatch.com/lyrics/765/12164301?utm_source=application&utm_campaign=api&utm_medium=General+Assembly+Australia%3A1409622852688",
//               "track_edit_url": "https://www.musixmatch.com/lyrics/765/12164301/edit?utm_source=application&utm_campaign=api&utm_medium=General+Assembly+Australia%3A1409622852688",
//               "restricted": 0,
//               "updated_time": "2022-05-26T22:27:34Z",
//               "primary_genres": {
//                 "music_genre_list": [
//                   {
//                     "music_genre": {
//                       "music_genre_id": 14,
//                       "music_genre_parent_id": 34,
//                       "music_genre_name": "Pop",
//                       "music_genre_name_extended": "Pop",
//                       "music_genre_vanity": "Pop"
//                     }
//                   },
//                   {
//                     "music_genre": {
//                       "music_genre_id": 21,
//                       "music_genre_parent_id": 34,
//                       "music_genre_name": "Rock",
//                       "music_genre_name_extended": "Rock",
//                       "music_genre_vanity": "Rock"
//                     }
//                   },
//                   {
//                     "music_genre": {
//                       "music_genre_id": 1134,
//                       "music_genre_parent_id": 14,
//                       "music_genre_name": "Soft Rock",
//                       "music_genre_name_extended": "Pop / Soft Rock",
//                       "music_genre_vanity": "Pop-Soft-Rock"
//                     }
//                   }
//                 ]
//               }
//             }
//           }
//         ]
//       }
//     }
//   }
// ]

// const songLyrics = [
//   {
//     "message": {
//     "header": {
//     "status_code": 200,
//     "execute_time": 0.0088570117950439
//     },
//     "body": {
//     "lyrics": {
//     "lyrics_id": 23980630,
//     "explicit": 0,
//     "lyrics_body": "All I wanna do when I wake up in the morning is see your eyes\nRosanna, Rosanna\nI never thought that a girl like you could ever care for me\nRosanna\nAll I wanna do in the middle of the evening is hold you tight\nRosanna, Rosanna\nI didn't know you were looking for more than I could ever be\n\nNot quite a year since you went away\nRosanna, yeah\nNow she's gone, and I have to say\n\nMeet you all the way\nMeet you all the way\nRosanna, yeah\nMeet you all the way\nMeet you all the way\nRosanna, yeah\n...\n\n******* This Lyrics is NOT for Commercial use *******\n(1409622852688)",
//     "script_tracking_url": "https://tracking.musixmatch.com/t1.0/m_js/e_1/sn_0/l_23980630/su_0/rs_0/tr_3vUCAPseRjaPylcQN4Jtp_bxepoOaFOh1_5pOja5B7emXq8br2s02HB0CT8nZzNoVDz_9NIc-Xj267uyN8DFNmjsmTqUgxfxq3pnFnIYTK2_oiqn0nbZWBxXbhHE6XgmzaGJtYkvddPin4FZx7fSA1POfCcGifr-hdaOo7f41mR3_61Dk4dWrgWjK6oslzFS_0ZUKa5jZvJmgxgLEMmQ6AGW3HY9IicLZ-0ZmLgh9QO917b9IzNdoMtxnOLmzrOsDqtZjYuXGpiAzDLy8XIzDmK1lDcc-BMojNqPjVZ1RqRtTHruxcsX_2quHpNKjc0TE4jJx_dR3e-6nlmGdGgynGJhRTK67aVKD9aIiW0o5PFQnOkiUZToenryw-ZWfvbtSfdyT3Tg4nClSQdeHQ2vvWXBdzDJMH6jGc26wqRmxQbfaUDOnpuZkYLWKIY/",
//     "pixel_tracking_url": "https://tracking.musixmatch.com/t1.0/m_img/e_1/sn_0/l_23980630/su_0/rs_0/tr_3vUCAEvoAxRXghMQFW3Z9OcGxgi2FL90gpiXhO6mGQMj7QMBKXwkEAodSmBA02f7sBpH_3Lkg7c3i8qe9b0vq_QdW3hYkBE4UNsv-VjHPs7hzg-WD62C5JtU8pDavs0FpMw_PlyVJj7KxmjIl8_4QhjzPkkrBelXuyF2BrTgHAUKKp9ZJ0d_Y-jdGm-lp_qJYmLUeJL3k0ANcT54KzLUHffa5d80y2Q8p-BxJjtdu7ze_VtSN_ZBcLjNbTTbQhWoEWkLrFOZVDPEDjjXQnP_T6DZl4ZfN-hxda_oW_CnM-zlYubZKo4TIVig_zDA8XVjJt3ziHGTwRjER0hP-gWVd546dLq6yKOiyL6lANhIKzo0gC-bivefK-EtPUiyILhsVArvrtBoXRMo-HmlsIIa4PdOn6jfnjT6UJ448dKb9CB9jYlw20cFAZB7TLI/",
//     "lyrics_copyright": "Lyrics powered by www.musixmatch.com. This Lyrics is NOT for Commercial use and only 30% of the lyrics are returned.",
//     "updated_time": "2022-10-05T14:59:43Z"
//     }
//     }

//     }
//     }

// ]
// }

// export default Songs 