import * as admin from 'firebase-admin';

export const bucketName = 'hell-grade.appspot.com';

if (process.env.NODE_ENV === 'production') {
  admin.initializeApp({
    credential: admin.credential.cert({
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    storageBucket: bucketName,
  });
} else {
  var serviceAccount = require('./firebase-account.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: bucketName,
  });
}

const bucket = admin.storage().bucket();

export default bucket;

// 'bucket' is an object defined in the @google-cloud/storage library.
// See https://googlecloudplatform.github.io/google-cloud-node/#/docs/storage/latest/storage/bucket
// for more details.
