import 'package:flutter/cupertino.dart';

class Tweet {
  final String name;
  final String username;
  final String avatar;
  final String tweetId;
  final String userId;
  final String mediaLinks;
  final String tweetText;
  final List mentions;
  final List hashtags;
  final List likes;
  final List retweets;
  final List replyingTo;
  final List comments;
  final String date;
  Tweet({
    @required this.name,
    @required this.username,
    @required this.avatar,
    @required this.userId,
    @required this.mediaLinks,
    @required this.tweetId,
    @required this.tweetText,
    @required this.mentions,
    @required this.hashtags,
    @required this.likes,
    @required this.retweets,
    @required this.replyingTo,
    @required this.comments,
    @required this.date,
  });
}
