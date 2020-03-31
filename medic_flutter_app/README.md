# medic_flutter_app

A new Flutter project named Dr. medic which consists of features such as Qr Code Scanning, NLP and OCR in order to create a medical service that can be proved beneficial for patients and doctors to keep track of medical and treatment history which are quickly accessible, reliable and easy to maintain..

## Getting Started

- clone this repository.

```
git clone 'repository_url'
```

- download flutter from flutter : https://flutter.dev/docs/get-started/install
- install flutter and dart plugins for your text editor.
- open project in your preferred text editor and download all dependencies from pubspec.yaml (automatically downloaded during first run)
- create a folder named api in lib folder
- create a file name keys.dart
- paste this key in the file 
```
import 'package:scoped_model/scoped_model.dart';

class ApiKeys extends Model {
  static final uri = 'http://evening-dusk-90900.herokuapp.com/';
}
```
- run project using command

```
flutter run
```

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.
