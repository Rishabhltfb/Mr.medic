import '../api/keys.dart';
import 'dart:io';
import 'package:scoped_model/scoped_model.dart';
// import '../models/tweet.dart';

class ConnectedModel extends Model {
  // List<Tweet> feedList = [];
  final uri = ApiKeys.uri;
  bool isLoading = false;
  File file = null;
}
