const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    console.error("❌ Error en getReviews:", err);
    res.status(500).json({ msg: "Error obteniendo reseñas" });
  }
};

exports.getReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({ msg: "No encontrada" });
    }

    res.json(review);
  } catch (err) {
    console.error("❌ Error en getReview:", err);
    res.status(500).json({ msg: "ID inválido o error" });
  }
};

exports.getMyReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ userId: req.user.id });
    res.json(reviews);
  } catch (err) {
    console.error("❌ Error en getMyReviews:", err);
    res.status(500).json({ msg: "Error obteniendo reseñas del usuario" });
  }
};

exports.createReview = async (req, res) => {
  try {
    const review = await Review.create({
      ...req.body,
      userId: req.user.id
    });

    res.json(review);
  } catch (err) {
    console.error("❌ Error creando reseña:", err);
    res.status(500).json({ msg: "Error creando reseña" });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!review) {
      return res.status(403).json({ msg: "No puedes editar esto" });
    }

    review.titulo = req.body.titulo;
    review.descripcion = req.body.descripcion;
    review.calificacion = req.body.calificacion;

    await review.save();

    res.json(review);
  } catch (err) {
    console.error("❌ Error actualizando reseña:", err);
    res.status(500).json({ msg: "Error actualizando reseña" });
  }
};


exports.deleteReview = async (req, res) => {
  try {
    const deleted = await Review.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!deleted) {
      return res.status(403).json({ msg: "No puedes eliminar esto" });
    }

    res.json({ msg: "Reseña eliminada" });
  } catch (err) {
    console.error("❌ Error eliminando reseña:", err);
    res.status(500).json({ msg: "Error eliminando reseña" });
  }
};
